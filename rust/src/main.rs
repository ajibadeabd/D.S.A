fn main() {
    let response = add(2,3);
    let response2 = divide(6,3);
    println!("{:?}",response);
    println!("{:?}",response);
    println!("{:?}",response2);
    match_fun();
    struct_use_enum();
    turple();
    owner_ship();
    // let mut a= 1;



// loop {
// println!("{}",a);
// a+=1 ;// a=a+1

//     if  a==10{
//         break
//     }

// }
// let mut  while_var = 0;
// while  while_var <19 {
//     println!("{}", while_var);
//     while_var+=1;
// }

    // if response==1 || response!=1 {
    // println!("{:?}","test");
    // }
    enum_fun();
    struct_fun();
    

}



fn add(a:i32,b:i32)->i32{
    a+b
}
fn divide(a:i32,b:i32)->i32{
    a/b
}
fn match_fun()->(){
    let answer = "test";
    match answer {
        "well" =>println!("{}","done"),
        _ =>println!("try again"),
    }
}

fn enum_fun()->(){
    enum Direction {
        Left,
        Right,
        Front,
        Center,
        Back,
    }
    let go = Direction::Center;
    match go {
        Direction::Back =>println!("Back"),
        Direction::Left =>println!("Left"),
        Direction::Right =>println!("Right"),
        Direction::Center =>println!("Center"),
        Direction::Front =>println!("Front"),
    }
}
fn struct_fun()->(){

    struct Item {
        stock:i32,
        price:f64,
    }
    let cereal =  Item {
        stock:22,
        price:2.44

    };
    println!("stock {}",cereal.stock);
    println!("price {}",cereal.price);
}

fn struct_use_enum()->(){

    enum Gender {
        Male,
        Female
    }
    struct User {
        // name
        score:f64,
        gender:Gender,
    }
    let _user = User {
        score:22.22,
        gender:Gender::Female,
    };
    print_user(&_user);
    print_user(&_user);
fn print_user(_user:&User)->(){
   let s =  match _user.gender {
        Gender::Male=>println!("male"),
        Gender::Female=>println!("female"),
    };
    println!("{:?}",_user.score);

}
}

    fn turple(){
    let turp = (1,"5rgt4");
    fn get_turple(a:i32,b:f64,c:String )->( i32,f64,String ){
        println!("{}{}{}",a,b,c);
        (a,b,c)

    }
    get_turple(1,22.2,"ERde".to_string());

    println!("turp0 = {:?}",turp.0);
    println!("turp1 = {:?}",turp.1);

}


// fn prin(data:String)->(){
//     println!("{}",data);
//     match data {
//         "ddd"=>println!("ss it is"),
//     };
// }
fn owner_ship(){
    let s = "ss";
    
    // prin(s.to_string());
    // prin(s.to_string());

}