export var currentDate = new Date();
export var testBirthDate = new Date(1993, 10, 7);

export class userInfo {
  constructor(birthDate) {
    this.birthDate = birthDate;

  }

  getAge() {
    let ageMilliseconds = this.birthDate;
    let currentAge = ((currentDate / 31536000000) - (ageMilliseconds / 31536000000));
    let age = Math.floor(currentAge);
    return age;
  }

  earthAge () {
    let earthAge = this.getAge() / 1;
    return earthAge;
  }

  mercuryAge () {
    let mercuryAge = this.getAge() / .24;
    return mercuryAge;
  }

  venusAge () {
    let venusAge = this.getAge() / .62;
    return venusAge;
  }

  marsAge () {
    let marsAge = this.getAge() / 1.88;
    return marsAge;
  }

  jupiterAge () {
    let jupiterAge = this.getAge() / 11.86;
    return jupiterAge;
  }

  getLifeExpectancy() {
    let remainingYears = Math.floor(78.69 - this.getAge());
    return remainingYears;
}

earthLifeExpectancy () {
    let earthLifeExpectancy = this.getLifeExpectancy() / 1;
    return earthLifeExpectancy;
  }

  mercuryLifeExpectancy () {
    let mercuryLifeExpectancy = this.getLifeExpectancy() / .24;
    return mercuryLifeExpectancy;
  }

  venusLifeExpectancy () {
    let venusLifeExpectancy = this.getLifeExpectancy() / .62;
    return venusLifeExpectancy;
  }

  marsLifeExpectancy () {
    let marsLifeExpectancy = this.getLifeExpectancy() / 1.88;
    return marsLifeExpectancy;
  }
  
  jupiterLifeExpectancy () {
    let jupiterLifeExpectancy = this.getLifeExpectancy() / 11.86;
    return jupiterLifeExpectancy;
  }

}
