fn diagonal_difference(arr: &Vec<Vec<i32>>) -> i32 {
    let arr_index = arr.len() as i32 - 1;
    let mut diagonal_sum1 = 0;
    let mut diagonal_sum2 = 0;

    for (i, curr) in arr.iter().enumerate() {
        diagonal_sum1 += curr[i];
        diagonal_sum2 += curr[arr_index as usize - i];
    }

    (diagonal_sum1 - diagonal_sum2).abs()
}

fn main() {
    let arrays = vec![
        vec![2, 3, 4],
        vec![2, 3, 4],
        vec![1, 3, 4],
    ];

    let result = diagonal_difference(&arrays);
    println!("{}", result);
}
