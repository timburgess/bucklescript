
let suites :  Mt.pair_suites ref  = ref []
let test_id = ref 0
let eq loc x y = Mt.eq_suites loc x y ~test_id ~suites
let b loc x  = Mt.bool_suites loc x ~test_id ~suites





let f x =  
    match x () with 
    | 1 -> 'a'
    | 2 -> 'b'
    | 3 -> 'c'
    | _ -> 'x'  

;; eq __LOC__ (f (fun _ -> 1)) 'a'
;; eq __LOC__ (f (fun _ -> 2)) 'b'
;; eq __LOC__ (f (fun _ -> 3)) 'c'
;; eq __LOC__ (f (fun _ -> 0)) 'x'
;; eq __LOC__ (f (fun _ -> -1)) 'x'

;; Mt.from_pair_suites __FILE__ !suites    