# Title: Efficient SQL File Merger using Node.js

## Description:

Managing scattered SQL files across different directories can be a daunting task, but worry not! This repository provides a Node.js solution that simplifies the process of merging SQL files into a single cohesive script. This README introduces the code and its functionalities, offering developers a streamlined approach to combining SQL files effortlessly.

Table of Contents:

- Introduction
- Code Overview
- Usage
- Customization
- Conclusion

## Introduction:

When working on software projects, dealing with multiple SQL files containing critical queries, schemas, and instructions is common. However, these files might be organized across various folders and subfolders for clarity. Nevertheless, there comes a time when you need to merge them into a single SQL script for complex operations or deployment. This is where the provided Node.js code comes in handy.

## Code Overview:

### Environment Setup:
The code begins by importing the 'fs' (file system) and 'path' modules to handle file and folder paths efficiently.

### Variable Definition:
The directory path to the main folder where SQL files are located is defined. This path is constructed using the 'path' module and the __dirname variable, representing the current directory.

### SQL File Retrieval:
The getSQLFiles function is the heart of the process. It recursively searches through the main directory and its subdirectories to find all SQL files. Files with the .sql extension are filtered and stored in an array.

### Content Merging:
Once the list of SQL files is obtained, the mergeSQLFiles function reads the content of each file using the 'fs' module and combines them into a single SQL script. The result is written to a new file named 'merged.sql'.

## Execution:
The code calls the getSQLFiles function to retrieve the list of SQL files and then executes the mergeSQLFiles function to merge the contents. A success message is printed to the console to indicate the operation's success.

## Usage:

To use the provided code, follow these steps:

Clone this repository to your local machine.
Navigate to the repository's root directory.
Customize the directoryPath variable in the code to point to your SQL files' main directory.
Run the Node.js script using ```node file_merge.js```.

Click on [Archety.dev](https://archety.dev/non-categorizzato/ottimizza-il-tuo-processo-di-unione-di-file-sql-con-node-js/) for more informations.

# Disclaimer

The code provided in this repository is offered "as-is" and without any warranties or guarantees of fitness for a specific purpose. While efforts have been made to ensure accuracy and functionality, it is important to acknowledge the following points before utilizing the code:

No Warranty: The code is provided without warranty of any kind, either expressed or implied, including but not limited to, the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the code is with the user.

Use at Your Own Risk: The code has been created to demonstrate a specific concept or functionality. It may not be suitable for all environments or applications. Users are advised to thoroughly review, test, and customize the code to meet their own requirements and standards.

No Support: The authors and contributors of the code may not be available for support or assistance. While efforts may be made to address issues or questions, there is no guarantee of timely response or resolution.

Liability Limitation: In no event shall the authors or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this code, even if advised of the possibility of such damage.

Security Considerations: It is the responsibility of the user to assess and implement appropriate security measures when using or deploying the code. Code from external sources should be reviewed for potential vulnerabilities before being integrated into production systems.

By using the code provided in this repository, you acknowledge that you have read, understood, and agreed to these terms. You are encouraged to exercise caution and due diligence in your utilization of the code for your specific purposes.