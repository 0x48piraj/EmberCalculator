# Advanced Calculator in Ember.JS

![image](https://user-images.githubusercontent.com/5800726/34321122-eab965e2-e82d-11e7-9705-37d07072925b.png)


## Demonstration :

![calc-demo](https://user-images.githubusercontent.com/5800726/34321173-ec9d1420-e82e-11e7-89b6-e9f9c20dc4c8.gif)

## Running / Run Tests / Building / Deploying

### Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Running / Development

* `git clone https://github.com/0x48piraj/advanced-calculator`
* `cd advanced-calculator`
* `npm install`
* `ember serve`
* Visit your app at _**[http://localhost:4200](http://localhost:4200)**_.
* Visit your tests at _**[http://localhost:4200/tests](http://localhost:4200/tests)**_.

![image](https://user-images.githubusercontent.com/5800726/34321159-aa91d192-e82e-11e7-9642-7de75d2d7b47.png)

### Deploying

#### Surge.sh

![image](https://user-images.githubusercontent.com/5800726/34321301-ca431de0-e831-11e7-81c3-6442558125aa.png)


#### Heroku

![image](https://user-images.githubusercontent.com/5800726/34322627-819451f6-e852-11e7-9431-e6373683289a.png)
![image](https://user-images.githubusercontent.com/5800726/34321312-28c5f554-e832-11e7-990b-848a437556f8.png)

##### Note : 

```
$ heroku create --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git

Creating app... !
 !    You've reached the limit of 5 apps for unverified accounts. Delete some
 !    apps or add a credit card to verify your account.

```

#### gh-pages

> **I was not able to deploy using `gh-pages`**

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
