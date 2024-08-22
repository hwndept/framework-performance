use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello_route() -> impl Responder {
    HttpResponse::Ok().body("Hello!")
}

#[get("/{name}")]
async fn hello_name_route(path: web::Path<(String,)>) -> impl Responder {
    HttpResponse::Ok().body(format!("Hello {}!", path.into_inner().0))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(hello_route).service(hello_name_route))
        .bind(("0.0.0.0", 3000))?
        .run()
        .await
}
