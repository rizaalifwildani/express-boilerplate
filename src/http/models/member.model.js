const uuid = require('uuid')
const PASSWORD = require('../../helper/password.helper')

const Member = (d, t) => d.define('members', {
  id: {
    type: t.CHAR(36),
    autoIncrement: false,
    unique: true,
    primaryKey: true,
  },
  avatar: {
    type: t.STRING(50),
    defaultValue: '',
  },
  firstName: {
    type: t.STRING(30),
    allowNull: false,
    defaultValue: '',
  },
  lastName: {
    type: t.STRING(20),
    defaultValue: '',
  },
  email: {
    type: t.STRING(50),
    allowNull: false,
    defaultValue: '',
    unique: true,
  },
  phone: {
    type: t.STRING(15),
    allowNull: false,
    defaultValue: '',
    unique: true,
  },
  password: {
    type: t.TEXT,
    allowNull: false,
    defaultValue: '',
  },
}, {
  freezeTableName: true,
  hooks: {
    beforeCreate: async (data) => {
      const member = data
      const hashedPassword = await PASSWORD.generate(member.password)
      member.id = uuid.v4()
      member.password = hashedPassword
    },
  },
})

module.exports = Member
