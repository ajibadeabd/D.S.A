  function distance(x1, y1, x2, y2) {
    return Math.sqrt(
        (x1 - x2) ** 2 + (y1 - y2) ** 2)
}
 
// function to return the area of triangle
function area(x1, y1, x2, y2, x3, y3) {
    return Math.abs(

        (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))
        
        / 2.0
        
        )
}
 
// function to return the area of triangle
function pointBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
    // find the lengths of the sides
    ab = distance(x1, y1, x2, y2)
    bc = distance(x2, y2, x3, y3)
    ac = distance(x1, y1, x3, y3)
    
    // check for degenerate traingle
    if (ac >= ab + bc || ab >= bc + ac || bc >= ab + ac) {
        return 0
    }
    
    // initialize two booleans to check if p or q lies on triangle or not
    flag_p = true
    flag_q = true
    
    // Calculate the area of the triangle
    A = area(x1, y1, x2, y2, x3, y3)
    
    // Calculate area of triangle PBC
    A1 = area(xp, yp, x2, y2, x3, y3)
    // Calculate area of triangle PAC
    A2 = area(x1, y1, xp, yp, x3, y3)
    // Calculate area of triangle PAB
    A3 = area(x1, y1, x2, y2, xp, yp)
    
    // if sum of areas is not equal to total area, then point is outside
    if (A != A1 + A2 + A3) {
        flag_p = false
    }
    
    // Calculate area of triangle QBC
    B1 = area(xq, yq, x2, y2, x3, y3)
    // Calculate area of triangle QAC
    B2 = area(x1, y1, xq, yq, x3, y3)
    // Calculate area of triangle QAB
    B3 = area(x1, y1, x2, y2, xq, yq)
    
    // if sum of areas is not equal to total area, then point is outside
    if (A != B1 + B2 + B3) {
        flag_q = false
    }
    
    // return accordingly
    if (flag_p && !flag_q) {
        return 1 
    } else if (!flag_p && flag_q) {
        return 2 
    } else if (flag_p && flag_q) {
        return 3 
    } else {
        return 4
    }
}
 
let test = 1
    // test case 1
    
    let x1 = 2, y1=2, x2 = 7, y2 = 2, x3 = 5, y3 = 4, xp = 4, yp= 3, xq= 7,yq= 4
    console.log(pointBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq))
 
    
    // test case 2 
    x1 = 0, y1 = 0, x2 = 2, y2 = 0, x3 = 4, y3 = 0, xp = 2, yp= 0, xq= 4, yq= 0
    console.log(pointBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq))
 
    // test case 3 
    x1 = 3, y1 = 1, x2 = 7, y2 = 1, x3 = 5, y3 = 5, xp = 3, yp= 1, xq= 0, yq= 0
    console.log(pointBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq))
