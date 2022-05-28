import mongoose from 'mongoose';
const { Schema } = mongoose;

const defaultCategories = [
    {name: 'Chung', icon: 'apps'},
    {name: 'Ăn uống', icon: 'fast-food'},
    {name: 'Thuê nhà', icon: 'home'},
    {name: 'Điện nước', icon: 'bulb'},
    {name: 'Đi lại', icon: 'bicycle'},
    {name: 'Sửa chữa', icon: 'build'},
    {name: 'Mua sắm', icon: 'basket'},
    {name: 'Tiết kiệm', icon: 'analytics'},
    {name: 'Dự phòng', icon: 'alert'},
]

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profile: {
        fullName: String,
        phoneNumber: String,
        birthday: Date,
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
    // limits: [{
    //     reset: String, // "Daily" or "Weekly" or "Monthly"
    //     current: Number,
    //     total: Number,
    //     start: Date,
    //     end: Date,
    // }],
    
    limits: {
        daily: {
            isActive: { type: Boolean, default: false},
            limit: Number
        },
        weekly: {
            isActive: { type: Boolean, default: false},
            limit: Number
        },
        monthly: {
            isActive: { type: Boolean, default: false},
            limit: Number
        }
    },

    wallets: [{ // other wallets
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
            name: String,
            icon: String,
        }],
        default: defaultCategories
    }
})

const user = mongoose.model('user', userSchema)

export { user }
