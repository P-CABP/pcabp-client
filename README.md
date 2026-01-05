# P-CABP Client

## 1. Application Setting

### 1.1 Install NVM

1. MacOS : [Homebrew](https://formulae.brew.sh/formula/nvm) 를 통해서 NVM 을 설치
2. Windows : [NVM-Windows](https://github.com/coreybutler/nvm-windows/releases) 를 설치

### 1.2 Install Node

NVM 을 통해서 Node 22 설치

```bash
$ nvm install 22
$ nvm use 22
$ node --version
-> v22.15.0 (v22 까지만 일치하는지 확인)
```

### 1.3 Install PNPM

```bash
$ npm install -g pnpm
$ pnpm --version
-> 10.12.4
```

### 1.4 Git Clone

```bash
$ git clone https://github.com/P-CABP/pcabp-client.git
$ cd pcabp-client
```

### 1.5 Install Dependencies

```bash
$ pnpm install
```

### 1.6 Run Application

```bash
$ pnpm run dev
```
