export class persona {
  id?: number;
  nombre: String;
  apellido: String;
  url_foto: String;

  constructor({ nombre, apellido, url_foto }: { nombre: String; apellido: String; url_foto: String; }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.url_foto = url_foto;
  }
}
