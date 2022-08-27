import express, { Request, Response } from "express";
import cors from  "cors"
import { User, users } from "./data";


const app = express()

app.use(express.json())
app.use(cors())


app.post("/users", (req: Request, res: Response)=>{
  let errorCode = 400
    try {
        const { id, name, account, age }: User = req.body
        
        if ( !id || !name || !account || !age) {
            errorCode = 422
            throw new Error("Um ou mais campos estão vazios")
        } if (age<18){
          errorCode = 401
          throw new Error ("O usuário deve ter 18 anos ou mais")
        }

        const newUser: User = {
            id,
            name,
            age,
            account
        }

        users.push(newUser)
        res.send("Usuário criado")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/users", (req: Request, res: Response) => {
  try {
    res.send(users)

  } catch (error: any) {
    res.send(error.message || "Erro inesperado")
  }
})

app.listen(3003, () => {
  console.log("Server running in http://localhost:3003")
})
