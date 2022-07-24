const corrector = arr => {
  const replacer = input => {
    if (typeof input === 'string') {
      return input
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&iacute;/g, 'i')
        .replace(/&amp;/g, '&')
        .replace(/&eacute;/g, 'e')
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&oacute;/g, 'o')
        .replace(/&shy;/g, '');
    }
    if (typeof input === 'object') {
      const newArr = input.map(el =>
        el
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&iacute;/g, 'i')
          .replace(/&amp;/g, '&')
          .replace(/&eacute;/g, 'e')
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"')
          .replace(/&oacute;/g, 'o')
          .replace(/&shy;/g, '')
      );
      return newArr;
    }
  };

  if (typeof arr === 'object') {
    const quiz = arr.map(obj => {
      obj.question = replacer(obj.question);
      obj.correct_answer = replacer(obj.correct_answer);
      obj.incorrect_answers = replacer(obj.incorrect_answers);
      return obj;
    });
    return quiz;
  }
};

export default corrector;
