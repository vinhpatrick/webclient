const usernameRegex = /[a-z0-9]{3,30}/
const passwordRegex = /.{8,}/
const phoneNumberRegex = /^([+84|84|0]+([35789]))+([0-9]{8})$/
const emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
const validateUsername = (username) => usernameRegex.exec(username)

const validatePhoneNumber = (phoneNumber) => phoneNumberRegex.exec(phoneNumber)

const validatePassword = (password) => passwordRegex.exec(password)

const validateEmail = (email) => emailRegex.exec(email)

module.exports = (props) => {
  const { firstname, lastname, username, password, rePassword, phoneNumber, email } = props

  const result = {}
  if (!firstname) result.firstname = 'Thiếu Tên!'
  if (!lastname) result.lastname = 'Thiếu Họ và đệm! '
  if (!username || !validateUsername(username))
    result.username = 'Tên đăng nhập từ 3 đến 30 ký tự, bao gồm chữ cái và chữ số!'
  if (!password || !validatePassword(password)) result.password = 'Mật khẩu cần ít nhất 8 ký tự!'
  if (!rePassword || !validatePassword(rePassword))
    result.rePassword = 'Mật khẩu cần ít nhất 8 ký tự!'
  if (password !== rePassword) result.rePassword = 'Mật khẩu không khớp!'
  if (!phoneNumber || !validatePhoneNumber(phoneNumber)) result.phoneNumber = 'Số điện thoại sai!'
  if (!email || !validateEmail(email)) result.email = 'Email sai!'

  return result
}
