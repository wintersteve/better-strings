const zip = <A, B>(a: A[], b: B[]): (A | B)[][] => a.map((k, i) => [k, b[i]]);

export default zip;
