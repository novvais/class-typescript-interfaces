interface ICarOne {
  brand: string;
  model: string;
  velocity: number;

  accelerate(): void;
}

class CarOne implements ICarOne {
  brand: string;
  model: string;
  velocity: number;

  accelerate(): void {}
}

interface ICarTwo {
  year: number;

  accelerate(): void;
}

abstract class CarTwo {
    protected velocity: number;

    abstract brake(): void
}

class Fusion extends CarOne implements ICarTwo {
  year: number;

  constructor(year: number) {
    super()
    this.year = year
    this.velocity = 0
  }

  accelerate(): void {
    this.velocity += 1
  }

  brake(): void {
    this.velocity = 0
}
}

interface IUser {
  name: string;
  email: string;
  password: string;
}

abstract class User {
  name: string;
  email: string;
  protected password: string;

  constructor(user: IUser) {
    
  }

  abstract login(password: string): boolean;
}

class Menager extends User {
  constructor(user: IUser) {
    super(user);
  }

  login(password: string): boolean {
    if (this.password !== password) {
      return false
    }

    return true;
  }
}

interface IAnimal {
  name: string
}

interface IAnimal {
  weight: number
}

type TAnimal = {
  name: string
}

let bear: IAnimal
