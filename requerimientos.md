1. ID-RF-001: Registrar usuario.

- Descripción: Permite que personas sin cuenta creen una en la aplicación.
- Prioridad: Alta.
- Entrada: Correo electrónico, nombre de usuario y contraseña.
  + Puede crearse una cuenta con gmail, facebook o instagram.
  + Pedir que la contraseña sea segura.
- Proceso:
  + Analizar que los datos sean correctos (correo electrónico con un buen formato, contraseña segura).
  + La aplicación manda los datos a la base de datos.
- Salida: Acceso a la página de login o mensaje de error.

2. ID-RF-002: Iniciar sesión.

- Descripción: Permite a usuarios registrados acceder al sistema.
- Prioridad: Alta.
- Entrada: Correo electrónico y contraseña.
  + Puede iniciarse sesión con cuentas de gmail, facebook o instagram.
- Proceso:
  + Validar con la base de datos.
  + En caso de que esté incorrecto, se sugiere la opción de recuperar contraseña.
- Salida: Acceso a la página principal o mensaje de error.

3. ID-RF-003: Administrar cuenta.

- Descripción: Permite a usuarios registrados editar los datos en su cuenta.
- Prioridad: Baja.
- Entrada: Contraseña, preferencias de estilo o colores.
- Proceso:
  + En caso de la contraseña, se confirma con la base de datos de que sea correcta, luego se manda un correo para cambiar la contraseña.
  + En caso de las preferencias, puede seleccionar y deseleccionar las que desee y se guardan automáticamente.
- Salida: Cambio correcto de los datos o mensaje de error (Lo último solo para la contraseña).

4. ID-RF-004: Administrar outfits.

- Descripción: Permitir a los usuarios crear, editar o eliminar outfits almacenados en su perfil.
- Prioridad: Alta.
- Entrada: Tipos o colores de prenda.  
  + Diferente a la recomendación de outfit.
- Proceso:  
  + La aplicación actualiza los datos que el usuario coloca en el nuevo outfit.
- Salida: Mensaje de guardado o eliminado (según sea el caso).

5. ID-RF-005: Recomendación de estilo.

- Descripción: Sugiere a los usuarios con base en sus preferencias de estilo un outfit con las prendas que ya haya seleccionado.
- Prioridad: Media.
- Entrada: Preferencias de los usuarios.
  + Si un usuario ya está creando un outfit entonces se le recomendará lo que le falta en su outfit.
- Proceso:
  + El logaritmo analiza las preferencias del usuario.
  + Sugiere el complemento de un outfit que esté editando o recomienda uno nuevo.
- Salida: Outfit que concuerda con las preferencias del usuario.

6. ID-RF-006: Recuperar contraseña.

- Descripción: Permite a usuarios registrados a cambiar su contraseña en caso de que no se acuerde.
- Prioridad: Alta.
- Entrada: Correo electrónico.
  + No funciona en caso de que inicie sesión con una aplicación externa (Gmail, Facebook, Instagram).
- Proceso:  
  + Validar con la base de datos la existencia del usuario con el correo.
- Salida: Correo con un link que permite que el usuario cree una nueva contraseña.
