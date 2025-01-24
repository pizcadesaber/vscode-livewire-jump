# Change Log

All notable changes to the "livewire-jump" extension will be documented in this file.

## [Unreleased]

- No changes yet.

## [2.0.2] - 2025-01-24

- PHP component files are now read to identify view aliases within `view()`. It also handles multiple related views for easier navigation.
- Views are skipped as components if an `index.blade.php` file does not exist in the subdirectories. Livewire components are detected from the `app/Livewire` directory (Volt support is not included).
- **Breaking Change:** The structure of `view.dirs` has been updated. The key format is now `blade-dir|php-dir` and the value format is `view-prefix|tag-prefix`. Review your configuration if you’ve modified this setting, as the `view-prefix` and `tag-prefix` values are swapped.
- The count of views, components (Blade and Livewire), and associated `view.dirs` PHP classes is now displayed when the view is refreshed.

> **Important:** To apply these changes, select `Refresh Views` from the context menu of a PHP or Blade file. This will update your views to the new system.

## [2.0.1] - 2025-01-17

- Improves the names of the settings.
- Updates the `Go to *` command visibility after refreshing the views.
- `Clear Views` command that clears cached views. (`Ctrl+Shift+P` and search this command).

## [2.0.0] - 2025-01-15

- Completely refactored the core of the extension. All providers are now connected to a unified, large-scale caching system.
- Added a new contextual menu option to read all Blade files and register them locally in the workspace, allowing for faster loading instead of reading files in real-time.
- The current system is a significant improvement, especially with the new route selection configuration, where prefixes for views and tags can be specified. The key should be `bladeDir|classDir`, and the value `tagPrefix|aliasPrefix`.


## [1.3.0] - 2025-01-14

- Changed tag navigation from definitions to clickable links for `<livewire:...>` and `<x-...>`.  
- Added autocomplete for `view('')`, suggesting existing Blade files.  
- Minor bug fixes and improvements.

## [1.2.1] - 2025-01-10

- Added support for Blade component classes:
  - Navigate between `/resources/views/components/my-class.blade.php` and `/app/Views/Components/MyClass.php`.
  - Commands dynamically adjust visibility based on the file type currently open (`Blade` or `PHP`).
- Improved command visibility logic:
  - Commands like `Go to Blade View` or `Go to PHP Class` are now context-aware and will only appear in the context menu when applicable.
- Enhanced `Go to` functionality for Livewire components and Blade views.

## [1.2.0] - 2025-01-04

- Introduced navigation from Livewire class files to their associated Blade views:
  - Right-click on a Livewire class file and select `Go to Livewire View`.
- Added autocomplete for `<livewire:` component tags:
  - Displays available Livewire components when typing `<livewire:`.
  - Introduced a new setting `livewire-jump.autocomplete.exclude` to exclude certain folders (e.g., the `Pages` subfolder) from the autocomplete suggestions.
- Bug fixes and minor improvements to the command palette.

> **Note:** Read the Features and Known Issues sections in the README.md for detailed instructions. This is a pre-release version.

## [1.1.0] - 2024-12-23

- Improved Blade slot handling:
  - Excluded `<x-slot>` elements from Livewire-related navigation and autocomplete suggestions.
- Minor performance improvements when navigating between Blade views and PHP classes.

## [1.0.0] - 2024-12-09

- Initial release with foundational navigation features:
  - Navigate from Livewire Blade views to their associated PHP classes using the context menu (`Right-click -> Go to Livewire Class`).
  - Added `Ctrl+left_click` navigation support:
    - From Blade views to Livewire component classes.
    - From Blade component views to their associated PHP classes.
