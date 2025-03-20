---
title: Markdown Syntax Example
description: A page displaying common elements used in Markdown documents.
publicationDate: 2025-03-20T01:29:19Z
---

## Headings

To create headings, use hash symbols (#) followed by a space. The number of hash symbols indicates the heading level.

```
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

```
<!-- empty line -->

I love Star Wars.

<!-- empty line -->

My favourite is Episode III – Revenge of the Sith.

<!-- empty line -->
```

I love Star Wars.

My favourite is Episode III – Revenge of the Sith.

---

## Italics

Use one asterisk \(\*\) or underscore \(\_\) to italicize text.

```md
I _love_ Star Wars.
My _favourite_ is Episode III – Revenge of the Sith.
```

I _love_ Star Wars.
My _favourite_ is Episode III – Revenge of the Sith.

---

## Bold

Use two asterisks \(\*\) or underscores \(\_\) to bold text.

```md
I **love** Star Wars.
My **favourite** is Episode III – Revenge of the Sith.
```

I **love** Star Wars.
My **favourite** is Episode III – Revenge of the Sith.

---

## Italics and Bold

Use three asterisks \(\*\) or underscores \(\_\) to both bold and italicize text.

```md
I **_love_** Star Wars.
My **_favourite_** is Episode III – Revenge of the Sith.
```

I **_love_** Star Wars.
My **_favourite_** is Episode III – Revenge of the Sith.

---

## Blockquotes

To add a blockquote add the greater-than character \(\>\) before a paragraph. For multi-line blockquotes, add additional greater-than character for each line and include an empty spacer line.

```md
> So this is how liberty dies...
>
> with thunderous applause.
```

> So this is how liberty dies...
>
> with thunderous applause.

---

## Strikethrough

Use tilde \(\~\) symbols to strikethrough text.

```md
~~I don't like sand.~~ It's coarse and rough and irritating.
```

~~I don't like sand.~~ It's coarse and rough and irritating.

---

## Horizontal Rule

Use three hyphens \(\-\), asterisks \(\*\), or underscores \(\_\) to create a horizontal rule.

```md
---
```

---

---

## Links

To create a link, the link text in brackets \(\[\]\) and then follow it immediately with the URL in parentheses \(\(\)\).

```md
[boogerbuttcheeks.com](https://boogerbuttcheeks.com)
```

[boogerbuttcheeks.com](https://boogerbuttcheeks.com)

---

## Ordered Lists

To create an ordered list, add line items with numbers followed by periods. Use an indent to create a nested list.

```md
1. Item 1
2. Item 2
   1. Sub item 1
   2. Sub item 2
3. Item 3
```

1. Item 1
2. Item 2
   1. Sub item 1
   2. Sub item 2
3. Item 3

---

## Unordered List

To create an unordered list, add a hyphen \(\-\), an asterisk \(\*\), or a plus sign \(\+\) in front of line items. Don't mix. Use an indent to create a nested list.

```md
- Item 1
- Item 2
  - Sub item 1
  - Sub item 2
- Item 3
```

- Item 1
- Item 2
  - Sub item 1
  - Sub item 2
- Item 3

---

## Checkboxes

Combine a list with square brackets ([]) representing a checkbox. Typing `x` inside the brackets marks the task as complete.

```md
- [x] Build a lightsaber
- [ ] Pass the Jedi Trials
- [ ] Train a Padawan
```

- [x] Build a lightsaber
- [ ] Pass the Jedi Trials
- [ ] Train a Padawan

---

## Code

To denote a word or phrase as code, enclose it in backticks (`).

```md
`Hello, world!`
```

`Hello, world!`

---

## Code Blocks

Denote a code block by wrapping a section of valid code in triple backticks (`). To enable syntax highlighting, type the shorthand symbol for the language after the first three backticks. [Reference for shorthand symbols](https://shiki.style/languages).

````
```js
  function hello() {
    console.log("hello world");
  }
```
````

```js
function hello() {
  console.log("hello world");
}
```

---

## Images

To add an image, add an exclamation mark (!), followed by alt text in brackets ([]), and the path or URL to the image asset in parentheses.

```md
![altText](pathToImage)
```

### Relative

Use the `![altText](./image.*)` pattern relative to the same folder as the markdown file. Notice the period.

```md
![X-Wing Starfighter](./x-wing.jpeg)
```

![X-Wing Starfighter](./x-wing.jpeg)

### External Image

Use the `![altText](imageUrl)` pattern.

```md
![Naboo N-1 Starfighter](https://raw.githubusercontent.com/trevortylerlee/n1/main/n1.jpeg)
```

![Naboo N-1 Starfighter](https://raw.githubusercontent.com/trevortylerlee/n1/main/n1.jpeg)

### Image link

Use the `[![altText](imageUrl)](href)`

```
[![Naboo N-1 Starfighter](https://raw.githubusercontent.com/trevortylerlee/n1/main/n1.jpeg)](https://trevortylerlee.com)
```

[![Naboo N-1 Starfighter](https://raw.githubusercontent.com/trevortylerlee/n1/main/n1.jpeg)](https://trevortylerlee.com)

---

## Footnotes

Add a caret (^) and an identifier inside brackets \(\[\^1\]\). Identifiers can be numbers or words but can't contain spaces or tabs.

```md
Here's a footnote, [^1] and here's another one. [^2]
[^1]: This is the first footnote.
[^2]: This is the second footnote.
```

Here's a footnote, [^1] and here's another one. [^2]
[^1]: This is the first footnote.
[^2]: This is the second footnote.

See the bottom of this page to view the footnotes.

---

## HTML

```
<p align="center">
 This is a paragraph aligned to the center.
</p>
```

<p align="center">
 This is a paragraph aligned to the center.
</p>

---

## Subscript

Use the `<sub>` tag to denote subscript.

```md
H<sub>2</sub>O
```

H<sub>2</sub>O

---

## Superscript

Use the `<sup>` tag to denote superscript.

```md
E=mc<sup>2</sup>
```

E=mc<sup>2</sup>

---

## Keyboard

Use the `<kbd>` tag to denote keys on the keyboard.

```md
<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>
```

<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>

---

## Abbreviate

Use the `<abbr>` tag to denote abbreviation.

```md
<abbr title="Graphics Interchange Format">GIF</abbr>
```

<abbr title="Graphics Interchange Format">GIF</abbr>

---

### Highlight

Use the `<mark>` tag to denote highlighted text.

```md
Do or do not. <mark>There is no try.</mark>
```

Do or do not. <mark>There is no try.</mark>

---

## Tables

Use three or more hyphens (-) for the column headers and use pipes (|) to separate each column. You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens.

```md
| Item   | Count |
| :----- | ----: |
| X-Wing |     1 |
| Y-Wing |     2 |
| A-Wing |     3 |
```

| Item   | Count |
| :----- | ----: |
| X-Wing |     1 |
| Y-Wing |     2 |
| A-Wing |     3 |

---

## Conclusion

Refer to [markdownguide.org](https://www.markdownguide.org/) for best practices as well as extended syntax.

---
