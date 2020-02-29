import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const RootPersistedConfig = {
    timeout: null,
    key: 'root',
    storage: storage,
    whitelist: [
        ''
    ],
    blacklist: [
        ''
    ]
}
