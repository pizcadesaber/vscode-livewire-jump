# Change Log

All notable changes to the "livewire-jump" extension will be documented in this file.

## [Unreleased]

- No changes yet.

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
