
const request = require("supertest");
const router = require("./routes/autor");
let data = {
  nombre: "Maria Paulina",
};

describe("POST /autor", () => {
  it("Crea un nuevo autor", (done) => {
    request(router)
      .post("/autor")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("No crea el autor porque faltan datos", (done) => {
    request(router)
      .post("/autor")
      .send({})
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
describe("GET /autor:id", () => {
  it("Traer un json con un autor segun su id", (done) => {
    request(router)
      .get("/autor:1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Devuelve un mensaje de error porque el autor no existe", (done) => {
    request(router)
      .get("/autor:1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

let newData = {
  title: "Maria Camila",
  
};
describe("PUT /autor:id", () => {
  it("Actualiza un tema segun su id", (done) => {
    request(router)
      .put("/autor:1")
      .send(newData)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Intenta actualizar un tema que no existe", (done) => {
    request(router)
      .put("/autor:1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe("DELETE /autor/:id", () => {
  it("Elimina un autor segun su id", (done) => {
    request(router)
      .delete("/autor:1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("No elimina un autor porque no existe", (done) => {
    request(router)
      .delete("/autor:1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});