# Livewire Jump Extension for VS Code

*Jump ahead, jump fast—speedy development!*

This extension allows you to quickly navigate between Livewire views, their associated PHP classes, and Blade components in Laravel projects. It streamlines the development workflow by providing an efficient way to jump from one file to another with just one click.

## Features

- **Register components and autocomplete Blade and Livewire tags:** To enhance performance, a manual action has been added to register all components and use them for code autocompletion across different parts of your project. The `Refresh Views` action is only available in Blade and PHP language files.

    ![Refresh views](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/refresh-views.gif)

    > **Note:** It is still pending to implement updates based on file change observation.

- **Customize view discovery:** The `livewire-jump.view.dirs` setting allows you to customize the search by specifying prefixes for views and tags. In summary, each key-value pair would follow this syntax: `"bladeDir|classDir": "classPrefix|tagPrefix"`. Keys also support `:` as a separator, but values do not, as it would conflict with `livewire:`. It’s not mandatory to specify both directories, but if you want to define only `classDir`, you must prepend it with `|` so it is passed as the second argument.
    
    ![view-discovery](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-discovery.jpg)

- **Jump from Blade view to PHP class (and vice versa):** Easily navigate between Blade files and its corresponding PHP classes. Right-click on a Blade or PHP file and select `Go to PHP Class` or `Go to Blade Class`.

    ![Go to PHP Class and View](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-class.gif)

- **Autocomplete component names:** The extension reads the paths found in `app/Livewire` and provides autocompletion for `<livewire:` and `<x-` tags. This is loaded using the `livewire-jump.view.dirs` setting.

- **Jump from Blade to other components:** Navigate from a Blade view to other Livewire or Blade components. Hold `Ctrl` (or `Cmd` on Mac) and left-click on any tag that starts with `<x-` or `<livewire:`.

    ![Go to component views](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/blade-links.gif)

- **Autocomplete for view string:** Autocomplete suggestions when typing `view('')`, or similar functions, showing existing Blade view files.

    ![View string](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-string.gif)

- **Jump from view string to Blade view:** You can navigate directly from a `view('...')`, `layout('...')`, or `#[Layout('...')]` string to the corresponding Blade view file by clicking the link.

## Requirements

This extension has no additional dependencies. You only need a Laravel project with Livewire to take full advantage of its features.

## Extension Setup

The extension doesn't require additional configuration. Simply install it, and it will be ready to use. However, ensure your project follows the standard Laravel and Livewire conventions for seamless integration.

If your project uses a custom folder structure, update the extension settings to match your paths.

## Known Issues

If you encounter any bugs or unexpected behavior, feel free to report them in the repository.
