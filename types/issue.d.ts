type IssueStatus = "BACKLOG" | "TODO" | "INPROGRESS" | "DONE"

interface Issue {
  content: string;
  id: string;
  name: string;
  status: IssueStatus;
  userId: string;
  createdAt?: string;
  user?: IUser
}
