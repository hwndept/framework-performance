use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use factorial::factorial;

#[get("/hello")]
async fn hello_route() -> impl Responder {
    HttpResponse::Ok().body("Hello!")
}

#[get("/hello/{name}")]
async fn hello_name_route(path: web::Path<(String,)>) -> impl Responder {
    HttpResponse::Ok().body(format!("Hello {}!", path.into_inner().0))
}

#[get("/factorial/{num}")]
async fn factorial_route(path: web::Path<(u64,)>) -> impl Responder {
    HttpResponse::Ok().body(factorial(path.into_inner().0).to_string())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello_route)
            .service(hello_name_route)
            .service(factorial_route)
    })
    .bind(("0.0.0.0", 3000))?
    .run()
    .await
}
