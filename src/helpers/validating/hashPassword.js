import sha256 from 'js-sha256'
import md5 from 'md5'

const hashPassword = (password) => sha256(md5(password))

export default hashPassword
