---
layout: post
title: Encryption vs Encoding vs Hashing
categories: [technical]
tags: [Security, Information]
description: Introduction
---

Did you know **_Encryption_**, **_Encoding_**, and **_Hashing_** are different from each other? They might sound similar at first but they are different at the core.

For transferring data over the internet, it is essential, to know that the data you are transferring from your end will reach the other end unaltered. For this to happen, **_Encryption_** and **_Hashing_** are used.

These two are used for 3 reasons:

1. Identity Verification
2. Integrity
3. Confidentiality

So sounds like both do the same thing, right? Not quite true.

On the other hand **_Encoding_** has nothing to anything with these reasons.

### Hashing

By definition, a Hashing is a process of converting given key to another value. This uses a **_Mathematical Algorithm_** in a **_Hash Function_** to get the result. The output of the hash function is called the _Hash Value_ or simply the _Hash_.

The advantage of the Hashing is that the hash can not be reverted back to the the original value. This is called **_One Way_** hashing.

**_Hashing_** ensures **_Integrity_** of the data. That it if and when somebody altered the data it can be captured.

Major rules of hashing are:

1. Same input will always produce same output.
2. Multiple disparate input will never produce same output.
3. Hash has no reversible functionality. Input can not be derived from the output.
4. Small change in input will result in drastic change in output.

**_Examples_**: SHA-1, SHA-2, MD5, SHA-256 and more.

### Encryption

By definition Encryption,is a process of converting data from one form to another form. But the one primary objective of the the process is to keep the information/data secret. This provides **_confidentiality_**. To get this confidentiality, encryption uses a secret, i.e. a _Key_. To ensure that the data is completely confidential, key plays an important role.

The encryption key should have some properties:

1. The key’s value should be extremely difficult to guess in order to preserve confidentiality.
2. It should be used in a single context, avoiding re-use in a different context. Re-using key can cause a security risk for sensitive data.

The process of formatting data from one form is **_Encryption_** and reverse process is **_Decryption_**.

**_Examples_**: AES, Blowfish, RSA

Encryption is divided into categories depending on the number of keys it uses.

1. **Symmetric Encryption**:
   It uses single key(secret) to encrypt and decrypt data. Only those who has the single shared key in their possession are authorized to access the data.

2. **Asymmetric Encryption**:
   It uses two keys, one is _public key_ which is available to all the users and other is _private key_. The one who has private can only decrypt the data. When applying encryption, the public key is used, whereas decrypting requires the private key.

### Encoding

By definition, Encoding is the process of converting data from one form to another and has nothing to do with cryptography. It guarantees none of the 3 cryptographic properties of **_Confidentiality_**, **_Integrity_**, and **_Identity Verification_** because it involves no secret and is completely reversible. Encoding methods are considered public and are used for data handling. The goal is not to keep information secret, but rather to ensure that it’s able to be properly consumed.

**_Examples_**: ASCII, Unicode, URL Encoding, Base64
