const person = {
    name: 'Sakib Hasan',
    age: 23,
    job: 'Student',
    gfName: 'Sunny',
    address: "Rajshahi",
    phone: '01782851981',
    friends: ['Riad', 'Abir', 'Nafi', 'Mokammel']
}

// const gfName = person.gfName
// const phone=person.phone

const { phone, gfName, address, salary } = person

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}
const { leader } = complexObject.info
console.log(leader)

// console.log(gfName, phone, salary, address)
// console.log(gfName, phone)
// console.log(gfName, phone)
// console.log(gfName, phone)

const friends = ['Sakib Hasan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Shahrukh Khan']
const [ami, firstFriend, secondFriend, ...restFriend] = friends
console.log(ami, firstFriend, secondFriend, restFriend)