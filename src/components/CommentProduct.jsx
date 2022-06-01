import { Avatar, Button, Comment, Form, Input, Rate, Tooltip } from 'antd'
import 'antd/dist/antd.min.css'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { deleteComment, getComment, postComment } from '../api/userApi'

const { TextArea } = Input

const CommentProduct = ({ productId }) => {
  const userId = localStorage.getItem('userId') && localStorage.getItem('userId')
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const [comment, setComment] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingbtn, setLoadingBtn] = useState(false)
  const [ratting, setRatting] = useState(0)
  const [text, setText] = useState('')
  // const [commentText, setCommentText] = useState('')
  const [commentId, setCommentId] = useState(null)
  const [newComment, setNewComment] = useState({
    product: productId,
    author: userId,
    comment: '',
    ratting: 0,
  })
  const handleChange = (e) => {
    setText(e.target.value)
    setNewComment({ ...newComment, comment: text, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    getComment(productId).then((response) => {
      response.data.map((cmt) => {
        // console.log('cmt', cmt.author)
        if (userId === cmt.author._id) {
          // setRatting(cmt.ratting)
          setCommentId(cmt._id)
          // setCommentText(cmt.comment)
        }
      })
      setComment(response.data)
      setLoading(false)
    })
  }, [loading])
  //add comment
  const addComment = () => {
    setLoadingBtn(true)
    newComment.ratting = ratting
    if (!auth) {
      toast.warning('Bạn cần đăng nhập để đánh giá sản phẩm!!!')
      setLoadingBtn(false)
    } else if (newComment.comment == '') {
      toast.warning('Bạn chưa nhập nội dung bình luận')
      setLoadingBtn(false)
    } else if (ratting <= 0) {
      toast.warning('Bạn vui lòng đánh giá sản phẩm')
      setLoadingBtn(false)
    } else {
      // console.log('newcomment', newComment)
      postComment(newComment)
        .then((respone) => {
          setLoading(true)
          setLoadingBtn(false)
          setRatting(0)
          setText('')
          toast.success('Bạn đã đánh giá sp thành công')
          // setCommentText('')
        })
        .catch((err) => {
          // console.log('ok', err.response)
          if (err.response.status >= 500) {
            toast.error('Bạn chỉ có thể đánh giá sản phẩm mình đã mua')
            setLoading(true)
            setLoadingBtn(false)
          } else {
            toast.error('Đánh giá sản phẩm thất bại')
            setLoading(true)
            setLoadingBtn(false)
          }
        })
    }
  }
  //deletecmt
  const deleteCmt = () => {
    deleteComment(commentId)
      .then((response) => {
        toast.success('Bạn đã xóa comment thành công !')
        setNewComment({
          ...newComment,
          comment: '',
          rating: 0,
        })
        setLoading(true)
        setCommentId(null)
      })
      .catch((err) => {
        toast.error('Bạn không được xóa comment của người khác')
        setLoading(true)
      })
  }
  const actionDelete = () => {
    setLoading(true)
    deleteCmt()
  }
  const actionChange = () => {
    setCommentId(null)
  }
  const actions = [
    <Tooltip key='comment-basic-like' title='sửa'>
      <span onClick={actionChange}>
        <span className='comment-action'>Sửa</span>
      </span>
    </Tooltip>,
    <Tooltip key='comment-basic-dislike' title='xóa' onClick={actionDelete}>
      <span>
        <span className='comment-action'>Xóa</span>
      </span>
    </Tooltip>,
  ]
  return (
    <div>
      {comment.map((cmt, index) => {
        if (cmt.product === productId) {
          return (
            <div key={cmt._id}>
              {/* {console.log('commentId', commentId)}
              {console.log('cmt.author._id', cmt.author._id)} */}
              <Comment
                // actions={commentId === cmt._id ? actions : []}
                actions={actions}
                author={[<a>{cmt.author.username}</a>]}
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' alt='vinh god' />}
                content={[
                  <div>
                    <Tooltip key='comment-basic-rate' title='Đánh giá'>
                      <a>
                        <Rate disabled value={cmt.ratting} style={{ fontSize: 15 }} />
                      </a>
                    </Tooltip>
                  </div>,
                  <div>
                    <p key={Math.random()}>{cmt.comment}</p>
                  </div>,
                ]}
                datetime={[
                  <Tooltip title={'Đánh giá lần cuối'}>
                    <span>{moment(cmt.updatedAt).format('DD/MM/YYYY')}</span>
                  </Tooltip>,
                ]}
              />
            </div>
          )
        }
      })}

      <>
        <Form.Item>
          <TextArea rows={4} value={text} name='comment' onChange={(e) => handleChange(e)} />
          <span>
            <Rate name='ratting' value={ratting} onChange={(value) => setRatting(value)} />
          </span>
        </Form.Item>

        <Form.Item>
          <Button onClick={addComment} type='primary' loading={loadingbtn}>
            Bình luận
          </Button>
        </Form.Item>
      </>
    </div>
  )
}

export default CommentProduct
