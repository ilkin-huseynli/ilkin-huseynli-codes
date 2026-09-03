// 1
const book = {
  title: "Dəli yığıncağı",
  author: "Cəlil Məmmədquluzadə",
  pageCount: 120,
  getBookInfo: function () {
    return this.title + " kitabı " + this.author + " tərəfindən yazılıb və " + this.pageCount + " səhifədir.";
  }
};

console.log(book.getBookInfo());

// 2
const student = {
  name: "Aysel",
  exam1: 75,
  exam2: 85,
  checkStatus: function () {
    const average = (this.exam1 + this.exam2) / 2;
    if (average >= 80) {
      return this.name + ": Əlaçı!";
    } else {
      return this.name + ": Adi tələbə";
    }
  }
};

console.log(student.checkStatus());

// 3
const shoppingCart = {
  itemPrice: 50,
  quantity: 3,
  hasDiscountCode: true,
  calcFinalPrice: function () {
    let total = this.itemPrice * this.quantity;
    if (this.hasDiscountCode === true) {
      total = total - total * 0.10;
    }
    return "Ödəniləcək yekun məbləğ: " + total + " AZN";
  }
};

console.log(shoppingCart.calcFinalPrice());