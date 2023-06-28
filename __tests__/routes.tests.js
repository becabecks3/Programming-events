const supertest = require('supertest');
const { v4: uuidv4 } = require('uuid');
const server = require('../index');
const moongoose = require('../utils/mongo_db')
const request = supertest(server)


afterAll( async () => {
    await server.close()
    await moongoose.connection.close()
})


//Test Home
describe('Get all Favs', () => {
    it('gets the test endpoint /', async() => {
        await request   
            .get('/')
            .expect(200)
    })

})
//Test Mostrar Favorites
describe('Get all favorites', () => {
    it('gets test endpoint /', async() => {
        await request   
            .get('/api/favorites')
            .expect(200)
    })

})
//Test signup
describe('Post usuario', () => {
    it('Se crea un usuario', done =>{
        request 
            .post('/auth/signup')
            .send(
                {
                    "name": "test2",
                    "email": "test2@gmail.com",//cambiar para cada test
                    "password": "1234"

                }
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err,res)=>{
                if (err) return done(err)
                return done()

            })
    })

})
//Test Login
describe('Post usuario', () => {
    it('Se logea un usuario', done =>{
        request 
            .post('/auth/login')
            .send(
                {
                    "email": "test2@gmail.com",
                    "password": "1234"
                }
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err,res)=>{
                if (err) return done(err)
                return done()

            })
    })

})


//Test Delete User

describe('Delete usuario', () => {
    it('Se borra un usuario', done =>{
        request 
            .delete('/api/user')
            .send(
                {
                    "email": "test2@gmail.com"
                    
                }
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err,res)=>{
                if (err) return done(err)
                return done()

            })
    })

})

//Test Editar Usuario

describe('Put usuario', () => {
    it('Se modifica un usuario(email)', done =>{
        request 
            .put('/api/user')
            .send(
                {
                    "name": "Ismael",
                    "email": "alguno@gmail.com",
                    "password": "1234",
                    "new_email": "ninguno@gmail.com"
                    
                }
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(202)
            .end((err,res)=>{
                if (err) return done(err)
                return done()

            })
    })

})

/*
//Test Crear ads
describe('Post ads', () => {
    it('Se crea un ads', done =>{
        request 
            .post('/api/ads')
            .send(
                {
                    "id": "4444",
                    "name": "Test1",
                    "info": "Testing",
                    "image": "test.jpg",
                    "description": "Testing"
                }
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err,res)=>{
                if (err) return done(err)
                return done()

            })
    })

})
*/