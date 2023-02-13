## Steps to Contribute

1. Fork and Clone the Repo
2. The project is bootstrapped with lerna , make sure you have lerna installed. 
3. Run lerna bootstrap from the project root directory to install deps.
4. There are two sub package the picker and the example folder.
    1. The picker folder contains the files for the library
    2. The example folder is a test website that utilizes our library.
5. Update your changes on the picker folder , update test cases and make sure tests are up and running. 
6. Run `yarn build` command, you will see a dist folder created. 
7. Run `yarn start` from the project root director you will see a react web app running locally that uses our library.
8. Verify your test cases and update examples on the example web app. 
9. Commit changes and create a Pull Request. 
10. Once the PR is merged to master, this will publish the library.


## Running Unit Tests
We are using Jest to Run unit tests.

## Configuring VSCode development environment
We have configured basic workspace configuration and automated tasks that are run when opening our workspace on vscode
