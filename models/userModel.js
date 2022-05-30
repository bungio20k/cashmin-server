import mongoose from 'mongoose';
const { Schema } = mongoose;

const defaultCategories = [
    { id: 1, name: 'Chung', icon: 'apps' },
    { id: 2, name: 'Ăn uống', icon: 'fast-food' },
    { id: 3, name: 'Thuê nhà', icon: 'home' },
    { id: 4, name: 'Điện nước', icon: 'bulb' },
    { id: 5, name: 'Đi lại', icon: 'bicycle' },
    { id: 6, name: 'Sửa chữa', icon: 'build' },
    { id: 7, name: 'Mua sắm', icon: 'basket' },
    { id: 8, name: 'Tiết kiệm', icon: 'analytics' },
    { id: 9, name: 'Dự phòng', icon: 'alert' },
]

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profile: {
        fullName: { type: String, default: "" },
        phoneNumber: { type: String, default: "" },
        birthday: { type: Date }
    },
    settings: {
        language: { type: String, default: 'Tiếng việt' },
        dateFormat: { type: String, default: 'dd/mm/yyyy' },
        currency: { type: String, default: 'VNĐ(đ)' },
        hideMoney: { type: Boolean, default: true },
        reminder: { type: Boolean, default: false },
        reminderTime: String,
        weekStart: { type: Number, default: 1 }, // Sunday - Saturday : 0 - 6 base on js getDay() method
        monthStart: { type: Number, default: 1 }, // 1 - 31 base on js getDate() method
        yearStart: { type: Number, default: 1 }, // 0 - 11 base on js getMonth() method
    },
    limits: {
        daily: {
            isActive: { type: Boolean, default: false },
            limit: Number
        },
        weekly: {
            isActive: { type: Boolean, default: false },
            limit: Number
        },
        monthly: {
            isActive: { type: Boolean, default: false },
            limit: Number
        }
    },

    wallets: [{
        id: Number, // local id
        name: String,
        isMain: Boolean, //is main wallet? -> use for displaying total money
        balance: Number,
        categoryName: String,
        categoryIcon: String,
        desc: String, //description for current wallet
        transactions: [{  // list of transactions for current wallet
            amount: Number,
            categoryName: String,
            categoryIcon: String,
            date: Date,
            desc: String,
        }]
    }],
    debits: [{
        id: Number, // local id
        name: String,
        isDebt: Boolean,
        amount: Number,
        categoryName: String,
        categoryIcon: String,
        desc: String, //description for current debt
        deadline: Date,
    }],
    categories: {
        type: [{
            id: Number, // local id
            name: String,
            icon: String,
        }],
        default: defaultCategories
    }
})

const user = mongoose.model('user', userSchema)

export { user }
