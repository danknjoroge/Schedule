import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Container } from "react-grid";
  
export default function App() {
  return (
    <div style={{backgroundColor: "#f9f9f9", display: "flex"}}>
      <Container>
        <row>
         
          <div class="col-md-4"  style={{display: 'flex', flexDirection: 'column', marginTop: "5rem"}}>
      <Card
        style={{
          width: 400,
          backgroundColor: "#455073",
          marginTop: "7%",
          marginLeft: "10px",
          flez: 1,
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Google Calendar
          </Typography>
          <Typography variant="h5" component="h2">
            Create events
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            create sessions
          </Typography>
          <Typography variant="body2" component="p">
            schedule events and
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{border: "1px solid #fff", color: "#f9f9f9"}}href="/sesion">Add Events</Button>
        </CardActions>
      </Card>
      </div>
      

      <div class="col-md-4">
      <Card
        style={{
          width: 400,
          backgroundColor: "#2f8e92",
          marginTop: "7%",
          marginLeft: "10px",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" style={{border: "1px solid #fff", color: "#f9f9f9"}}href="/comments">View Comments</Button>
    
        </CardActions>
      </Card>
      </div>


      <div class="col-md-4">
      <Card
        style={{
          width: 400,
          backgroundColor: "#2f8e92",
          marginTop: "7%",
          marginLeft: "10px",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" style={{border: "1px solid #fff", color: "#f9f9f9"}}href="/signin">Add New Student</Button>
    
        </CardActions>
      </Card>
      </div>

      <div class="col-md-4">
      <Card
        style={{
          width: 400,
          backgroundColor: "#2f8e92",
          marginTop: "7%",
          marginLeft: "10px",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" style={{border: "1px solid #fff", color: "#f9f9f9"}}href="/schedule">Create Schedules</Button>
    
        </CardActions>
      </Card>
      </div>



      </row>
      </Container>


    </div>
  );
}