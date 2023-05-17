interface Query {
    short_title?: string;
    status?: 'offering' | 'running' | 'offboarding';
}

export {Query}