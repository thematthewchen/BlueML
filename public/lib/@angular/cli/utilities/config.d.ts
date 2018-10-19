/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonAstObject, JsonObject, experimental } from '@angular-devkit/core';
export declare const workspaceSchemaPath: string;
export declare function getWorkspace(level?: 'local' | 'global'): experimental.workspace.Workspace | null;
export declare function createGlobalSettings(): string;
export declare function getWorkspaceRaw(level?: 'local' | 'global'): [JsonAstObject | null, string | null];
export declare function validateWorkspace(json: JsonObject): boolean;
export declare function getProjectByCwd(workspace: experimental.workspace.Workspace): string | null;
export declare function getPackageManager(): string;
export declare function migrateLegacyGlobalConfig(): boolean;
export declare function getSchematicDefaults(collection: string, schematic: string, project?: string | null): {};
export declare function isWarningEnabled(warning: string): boolean;
