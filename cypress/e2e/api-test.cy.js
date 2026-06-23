describe('ReqRes Collections API Tests', () => {

    it('POST - Create product dengan nama dinamis', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/collections/products/records?project_id=31997',
      headers: {
        'x-api-key': 'pro_80663275fe305291cc4dfd33695b4e033854f51b5c901fe973ab38755847b8a0',
        'X-Reqres-Env': 'prod',
        'Content-Type': 'application/json'
      },
      body: {
        data: {
          name: `SUHU Books`,
          price: '20',
          category: 'Book',
          in_stock: 'true'
        }
      }
    })
      .should((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.data.data.name).to.include('SUHU')
        expect(response.body.data.data.price).to.eq('20')
        expect(response.body.data.data.category).to.eq('Book')
        expect(response.body.data.data.in_stock).to.eq('true')})
    })

    it('GET - Ambil data products dari ReqRes', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/collections/products/records?project_id=31997',
      headers: {
        'x-api-key': 'pro_80663275fe305291cc4dfd33695b4e033854f51b5c901fe973ab38755847b8a0',
        'X-Reqres-Env': 'prod'
      }
    })
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.be.an('array')
        expect(response.body.data.length).to.be.greaterThan(0)
        expect(response.body.data[0].id).to.exist
        expect(response.body.data[0].data).to.have.property('name')
        expect(response.body.data[0].data).to.have.property('price')
        expect(response.body.data[0].data.name).to.eq('SUHU Books')
      })
  })
})