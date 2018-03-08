---
layout: post
title: Linking to Your Latest Project
categories: php project
---
Have you ever wanted to link to your latest Scratch project? Well now you can [here](https://scratch.mit.edu/projects/208747093/)

### How I built this

The linker uses a simple PHP file to redirect the user:
```php
<?php
$json = file_get_contents('https://api.scratch.mit.edu/users/' . $_GET['user'] . '/projects?offset=' . $_GET['projects'] . '&limit=40');
$data = json_decode($json, false);
$lastproject = array_pop($data);
$id = $lastproject->{'id'};
header("Location: https://scratch.mit.edu/projects/" . $id . "/");
exit;
?>
```

Here is what each line does:
1. Open PHP tag
2. Get the data from the Scratch API
3. Convert the JSON to a PHP-readable format
4. Get the last project by popping the array
5. Get the project ID
6. Set a redirect header
7. Prevent anything else from happening
8. Close PHP tag

There is a known bug that every 30-40 projects shared, you need to update the link. This has to do with the fact that the Scratch API only lets you request 40 projects at a time. I was too lazy to program it to figure out how many projects you have.
