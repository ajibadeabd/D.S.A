fn plus_minus(arr: &Vec<i32>) {
    let mut sign = (0, 0, 0); // Tuple to store counts for positive, negative, and zero values

    for &num in arr.iter() {
        if num < 0 {
            sign.1 += 1; // Increment negative count
        } else if num == 0 {
            sign.2 += 1; // Increment zero count
        } else {
            sign.0 += 1; // Increment positive count
        }
    }

    let arr_length = arr.len() as f64;
    println!("{:.6}", sign.0 as f64 / arr_length);
    println!("{:.6}", sign.1 as f64 / arr_length);
    println!("{:.6}", sign.2 as f64 / arr_length);
}

fn main() {
    let arr = vec![1, 2, -3];
    plus_minus(&arr);
}
