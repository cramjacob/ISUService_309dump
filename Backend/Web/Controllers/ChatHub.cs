using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Web.Models.DTO;

namespace Web.Controllers
{

    public class ChatHub : Hub
    {
        public async Task ReceiveMessage(ChatMessage message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
 
}
