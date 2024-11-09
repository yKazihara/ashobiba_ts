function writeGenerics<T>(mes: T): void {
    console.log(mes);
}
writeGenerics<string>('テスト'); // テスト
writeGenerics<number>(2); // 2
writeGenerics(3); // 3