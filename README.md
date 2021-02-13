[![Build][build-shield]][build-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<h1 align="center">
	<b>Administrative Documents</b>
	<br />
	<small align="center">WEB CLIENT</small>
</h1>

<details open="open">
  <summary>Table of Contents</summary>
<!-- TOC depthfrom:2 -->

-   [.1. About The Project](#1-about-the-project)
    -   [.1.1. Build with](#11-build-with)
-   [.2. Getting Started](#2-getting-started)
    -   [.2.1. Prerequisites](#21-prerequisites)
    -   [.2.2. Installation](#22-installation)
-   [.3. Roadmap](#3-roadmap)
-   [.4. License](#4-license)
-   [.5. Contact](#5-contact)

<!-- /TOC -->
</details>

## About The Project

Web application allowing to store, in a secure way, administrative files (Front End).

![screenshot-home]

The application allows you to add a document with a name and other optional information such as type, description, tags, date, amount, etc.

All added documents are encrypted using the AES encryption algorithm. They are decrypted on the fly with each download.

![screenshot-create]

Documents can be found in several ways :

-   With the search field
-   With a type
-   With a tag

![screenshot-search]

A very simple page allows you to download the document and see most of the information.

![screenshot-details]

### Build with

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Bulma](https://bulma.io/)

## Getting Started

### Prerequisites

-   yarn
    ```sh
    npm install --global yarn
    ```

### Installation

1. Install the API part [Administrative Documents API](https://github.com/KristenJestin/administrative-documents-api#22-installation)
2. Clone the repo
    ```sh
    git clone https://github.com/KristenJestin/administrative-documents-client-web.git
    ```
3. Install packages

    ```sh
    yarn install
    ```

## Roadmap

All future features are available on [Trello](https://trello.com/b/RldA4clM/%F0%9F%93%84-administrative-documents).

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Kristen JESTIN - [contact@kristenjestin.fr](mailto:contact@kristenjestin.fr)

Project Link: [https://github.com/KristenJestin/administrative-documents-client-web](https://github.com/KristenJestin/administrative-documents-client-web)

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/appveyor/job/build/kristenjestin/administrative-documents-client-web/CI?style=for-the-badge
[build-url]: https://github.com/KristenJestin/administrative-documents-client-web/actions?query=CI
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kristen-jestin
[screenshot-home]: docs/images/screenshot-home.png
[screenshot-create]: docs/images/screenshot-create.png
[screenshot-search]: docs/images/screenshot-search.png
[screenshot-details]: docs/images/screenshot-details.png
