# context API

1. create a context 
```
const userContext = createContext()
```

2. Provider

```
<userContext.Provider value={{water}}>
{children}
<userContext.Provider>
```

3. consumer
useContext() Hook
```
useContext(userContext)
```