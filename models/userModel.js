import mongoose from 'mongoose';
const { Schema } = mongoose;

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
    limits: [{
        reset: String, // "Daily" or "Weekly" or "Monthly"
        current: Number,
        total: Number,
        start: Date,
        end: Date,
    }],
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
        interval: String // "Daily" or "Weekly" or "Monthly"
    }],
    categories: [{
        name: String,
        icon: String,
    }]
})

const user = mongoose.model('user', userSchema)

export { user }
