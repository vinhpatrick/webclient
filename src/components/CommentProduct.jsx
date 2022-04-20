import 'antd/dist/antd.min.css'
import { Comment, Tooltip, Avatar, Rate } from 'antd'
import { Form, Button, Input } from 'antd'

const { TextArea } = Input

const CommentProduct = () => {
  return (
    <div>
      <Form.Item>
        <TextArea
          rows={4}
          name='comment'
          //  onChange={(e) => handleChange(e)}
        />
        <span>
          <Rate
            name='rating'
            //  value={rating} onChange={(value) => setRating(value)}
          />
        </span>
      </Form.Item>

      <Form.Item>
        <Button
        //  onClick={addComment} type="primary" loading={loadingbtn}
        >
          Bình luận
        </Button>
      </Form.Item>
    </div>
  )
}

export default CommentProduct
