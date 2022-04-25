import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.min.css'
import moment from 'moment'
import { Comment, Tooltip, Avatar, Rate } from 'antd'
import { getComment, postComment } from '../api/userApi'
import { Form, Button, Input } from 'antd'
import { useToast } from '../contexts/toast'

const { TextArea } = Input

const CommentProduct = ({ productId }) => {
  // console.log('comment', productId)
  const userId = localStorage.getItem('userId')
  const { error, warn, success } = useToast()
  const [comment, setComment] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingbtn, setLoadingBtn] = useState(false)
  const [ratting, setRatting] = useState()
  const [commentText, setCommentText] = useState('')
  const [commentId, setCommentId] = useState(null)
  const [newComment, setNewComment] = useState({
    product: productId,
    author: userId,
    comment: '',
    ratting: 0,
  })
  const handleChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value })
  useEffect(() => {
    getComment(productId).then((response) => {
      const { comment } = response.data.map((cmt) => {
        if (userId == cmt.author._id) {
          setRatting(cmt.ratting)
          setCommentId(cmt._id)
          setCommentText(cmt.comment)
        }
      })
      setComment(response.data)
      setLoading(false)
    })
  }, [loading])
  const addComment = () => {
    setLoadingBtn(true)
    newComment.ratting = ratting
    if (newComment.comment == '') {
      warn('Bạn chưa nhập nội dung bình luận')
      setLoadingBtn(false)
    } else if (ratting == null) {
      warn('Bạn vui lòng đánh giá sản phẩm')
      setLoadingBtn(false)
    } else {
      console.log('newcomment', newComment)
      console.log(123)
      postComment(newComment)
        .then((respone) => {
          success('Bạn đã đánh giá sp thành công')
          setLoading(true)
          setLoadingBtn(false)
          setRatting(ratting)
        })
        .catch((err) => {
          error('Đánh giá sản phẩm thất bại')
          setLoading(true)
          setLoadingBtn(false)
        })
    }
  }
  return (
    <div>
      {comment.map((cmt, index) => {
        return (
          <div key={index}>
            {console.log('commentId', commentId)}
            {console.log('cmt.author._id', cmt.author._id)}
            <Comment
              // actions={commentId === cmt._id ? actions : []}
              author={[
                <a>
                  {cmt.author.username}
                  {/* {cmt.author.firstname}{' '} */}
                </a>,
              ]}
              avatar={<Avatar src='https://joeschmoe.io/api/v1/random' alt='avt accommerce' />}
              content={[
                <div>
                  <Tooltip key='comment-basic-rate' title='Đánh giá'>
                    <a>
                      <Rate disabled value={cmt.ratting} style={{ fontSize: 15 }} />
                    </a>
                  </Tooltip>
                </div>,
                <div>
                  <p>{cmt.comment}</p>
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
      })}
      {userId != '' ? (
        <>
          <Form.Item>
            <TextArea rows={4} name='comment' onChange={(e) => handleChange(e)} />
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
      ) : (
        ''
      )}
    </div>
  )
}

export default CommentProduct
