import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('Global Error Handler: An unexpected error occurred.');
        console.log(error);
    }
}
