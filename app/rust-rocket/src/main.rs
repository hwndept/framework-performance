use std::net::{IpAddr, Ipv4Addr};

#[macro_use]
extern crate rocket;

#[get("/hello")]
fn hello_route() -> &'static str {
    "Hello!"
}

#[get("/hello/<name>")]
fn hello_name_route(name: &str) -> String {
    format!("Hello {}!", name)
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .configure(rocket::Config {
            port: 3000,
            address: IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)),
            ..Default::default()
        })
        .mount("/", routes![hello_route, hello_name_route])
}
