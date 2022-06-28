const { buildTriangle, fizzBuzz, chessBoard } = require("./chapter-2-exercises");

const logSpy = jest.spyOn(console, 'log');

test('build triangle', () => {
    buildTriangle();

    expect(logSpy).toHaveBeenCalledWith('#');
    expect(logSpy).toHaveBeenCalledWith('##');
    expect(logSpy).toHaveBeenCalledWith('###');
    expect(logSpy).toHaveBeenCalledWith('####');
    expect(logSpy).toHaveBeenCalledWith('#####');
    expect(logSpy).toHaveBeenCalledWith('######');
    expect(logSpy).toHaveBeenCalledWith('#######');
});

test('FizzBuzz', () => {
    fizzBuzz(15);

    expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith(2);
    expect(logSpy).toHaveBeenCalledWith("Fizz");
    expect(logSpy).toHaveBeenCalledWith(4);
    expect(logSpy).toHaveBeenCalledWith("Buzz");
    expect(logSpy).toHaveBeenCalledWith("Fizz");
    expect(logSpy).toHaveBeenCalledWith(7);
    expect(logSpy).toHaveBeenCalledWith(8);
    expect(logSpy).toHaveBeenCalledWith("Fizz");
    expect(logSpy).toHaveBeenCalledWith("Buzz");
    expect(logSpy).toHaveBeenCalledWith(11);
    expect(logSpy).toHaveBeenCalledWith("Fizz");
    expect(logSpy).toHaveBeenCalledWith(13);
    expect(logSpy).toHaveBeenCalledWith(14);
    expect(logSpy).toHaveBeenCalledWith("FizzBuzz");
});

test('build a chess board', () => {
    chessBoard(4);

    expect(logSpy).toHaveBeenCalledWith(" # #\n# # \n # #\n# # \n");

    expect(chessBoard(4)).toBe(" # #\n# # \n # #\n# # \n");
});