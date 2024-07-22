const x = async () => {
    console.log('hello world');
    return 'hello world';
}

x().then(console.log).catch(console.error);