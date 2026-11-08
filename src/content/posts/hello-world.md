---
title: "A small corner of the internet"
description: "A first note about why this blog exists, what might find its way here, and a tour of the Markdown features supported here."
pubDate: 2026-11-08
tags: [Notes, Beginnings, Markdown]
draft: false
---

# Hello, internet.

A small place to collect thoughts, document things I'm learning, and share projects as they take shape.

Expect a mix of **development notes**, *personal thoughts*, experiments, useful discoveries, and whatever else feels worth writing down.

> "A place to build, break, learn, and share."

More soon. ✨

---

## A little introduction

This is my corner of the internet. I'll use it to share what I'm working on, what I'm learning, and the occasional thing I find interesting.

The internet is a big place. This is my little corner of it.

## Real callouts

Callouts use the `[!TYPE]` Markdown syntax. Their labels, icons, and colors are generated automatically.

> [!NOTE]
> This is an informational note for readers. It adds context without interrupting the main flow.

> [!TIP]
> A useful trick or recommendation worth remembering.

> [!WARNING]
> Be careful when running commands that modify your files. Double-check the target before executing them.

> [!SUCCESS]
> The deployment completed successfully!

> [!DANGER]
> This operation permanently deletes the selected data. Make sure you have a backup.

> [!IMPORTANT]
> Here's something especially worth paying attention to.

## Quotes

> "A place to build, break, learn, and share."
>
> A little philosophy behind this blog.

## Code

You can mention a command inline, such as `npm run build`, or give it a dedicated code block:

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("internet"));
```

## Lists

### Unordered list

- Projects
- Experiments
- Thoughts

### Ordered list

1. Think of an idea.
2. Build something.
3. Share it.

### Task list

- [x] Start the blog
- [x] Write the first post
- [ ] Keep building

## Tables

| Project | Status | Version |
|---|---|---|
| Nerds | Active | 2.0 |
| Expand | Building | 1.0 |
| Blog | Live | 1.0 |

## Links

Visit [GitHub](https://github.com) to explore projects and open-source software.

## Images and captions

Add an image using its actual URL or a path relative to the public directory:

`![A description of the image](/blog/images/example.jpg)`

For a caption, put an italic paragraph directly below the image:

*An image caption can go here.*

## Keyboard shortcuts

Press <kbd>⌘</kbd> + <kbd>K</kbd> to open search.

## Expandable details

<details>
  <summary>What is this blog about?</summary>

  A collection of writing, development notes, personal projects, and experiments. There's always something new to try.
</details>

## Final thought

The internet is a big place. This is my little corner of it.

---

Posts are written in Markdown. Add a new `.md` file to `src/content/posts/`, give it a title, description, and publication date in the frontmatter, and it will appear on the home page automatically.
