// set_model.ts

export interface SetModel<T> {
    inserir(elemento: T): void;
    pertence(elemento: T): boolean;
    uniao(outroConjunto: SetModel<T>): SetModel<T>;
    intersecao(outroConjunto: SetModel<T>): SetModel<T>;
  }