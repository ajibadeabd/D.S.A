use std::collections::HashMap;

fn staircase3(n: usize) {
    let mut sp: HashMap<isize, String> = HashMap::new();
    sp.insert(-1, "".to_string());
    sp.insert(0, " ".to_string());
    for i in 1..=n {
        sp.insert(i as isize, sp[&(i as isize - 1)].clone() + " ");
    }
    let mut hash = "#".to_string();
    for i in 0..n {
        println!("{}{}", sp[&(n as isize - i as isize - 2)], hash);
        hash += "#";
    }
}

fn main() {
    staircase3(6);
}
